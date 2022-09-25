import { generate } from 'stability-ts'
require('dotenv').config();

const api = generate({
  prompt: 'A Stunning House',
  apiKey: process.env.STABILITY_API_KEY,
  // width: 512,
  // height: 512,
  // outDir: 'img',
  // steps: 50,
  // cfgScale: 7,
  // engine: 'stable-diffusion-v1',
  // diffusion: "k_lms",
  // seed: 3465383516,
  // debug: false,
  // samples: 1,
  // requestId: "34243242",
  // noStore: true,
  // host: 'grpc.stability.ai:443'
})

api.on('image', ({ buffer, filePath }) => {
  console.log('Image', buffer, filePath)
})

api.on('end', (data) => {
  console.log('Generating Complete', data)
})