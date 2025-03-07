import request from 'supertest';
import express from 'express';
import cors from 'cors';

// Create a simple express app for testing
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

describe('Server', () => {
  it('health endpoint returns status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
}); 