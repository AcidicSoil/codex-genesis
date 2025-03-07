# Codex Genesis

An interactive web application enabling users to create software systems through natural language commands, watching their code evolve in real-time.

## Features

- Interactive Terminal with natural language processing
- Real-time code generation and modification
- 3D visualization of code structure
- Integrated version control
- Collaborative development environment

## Tech Stack

### Frontend
- React with TypeScript
- Chakra UI for components
- Monaco Editor for code editing
- Three.js for 3D visualization
- Xterm.js for terminal emulation
- Zustand for state management
- Socket.io for real-time communication

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Prisma ORM
- Redis for caching
- Socket.io for WebSocket support
- Docker for containerization

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codex-genesis.git
cd codex-genesis
```

2. Install dependencies:
```bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# Backend .env
cp .env.example .env
# Edit .env with your database credentials and other settings
```

4. Start the development environment with Docker:
```bash
docker-compose up
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 