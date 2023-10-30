import heapq
goal_state = [[1, 2, 3], [8, 0, 4], [7, 6, 5]]
initial_state = [[2, 8, 3], [1, 6, 4], [7, 0, 5]]
def misplaced_tiles(state):
    misplaced = 0
    for i in range(3):
        for j in range(3):
            if state[i][j] != goal_state[i][j] and state[i][j] != 0:
                misplaced += 1
    return misplaced
def find_moves(state):
    moves = []
    for i in range(3):
        for j in range(3):
            if state[i][j] == 0:
                if i > 0:
                    moves.append((i, j, i - 1, j))
                if i < 2:
                    moves.append((i, j, i + 1, j))
                if j > 0:
                    moves.append((i, j, i, j - 1))
                if j < 2:
                    moves.append((i, j, i, j + 1))
    return moves
def a_star(initial_state, heuristic):
    open_list = [(heuristic(initial_state), 0, initial_state)]
    closed_set = set()
    while open_list:
        _, g, current_state = heapq.heappop(open_list)
        if current_state == goal_state:
            return current_state
        closed_set.add(tuple(map(tuple, current_state)))
        for move in find_moves(current_state):
            i, j, ni, nj = move
            new_state = [list(row) for row in current_state]
            new_state[i][j], new_state[ni][nj] = new_state[ni][nj], new_state[i][j]
            
            if tuple(map(tuple, new_state)) not in closed_set:
                h = heuristic(new_state)
                heapq.heappush(open_list, (g + h, g + 1, new_state))
    return None
result = a_star(initial_state, misplaced_tiles)
if result:
    print("Solution found:")
    for row in result:
        print(row)
else:
    print("No solution found.")
