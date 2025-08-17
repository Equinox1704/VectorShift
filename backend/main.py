from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List, Dict

app = FastAPI()

# CORS middleware 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    return {'status': 'parsed'}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    payload = await request.json()
    nodes = payload.get("nodes", [])
    edges = payload.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list and indegree for DAG check
    adjacency = {}
    indegree = {}

    node_ids = set(node["id"] for node in nodes)
    for node_id in node_ids:
        adjacency[node_id] = []
        indegree[node_id] = 0

    # Traverse edges
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in node_ids and target in node_ids:
            adjacency[source].append(target)
            indegree[target] += 1

    # Kahn's algorithm for DAG check (topological sort)
    queue = [nid for nid in node_ids if indegree[nid] == 0]
    visited_count = 0

    while queue:
        node = queue.pop(0)
        visited_count += 1
        for neighbor in adjacency[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited_count == num_nodes

    return JSONResponse(
        {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_dag
        }
    )
