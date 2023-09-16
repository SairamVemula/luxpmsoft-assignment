// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

const cred = {
  email: 'test@luxpmsoft.com', passsword: 'test1234!'
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {
  await sleep(1500)
  const body = JSON.parse(req.body);
  if (body.email === cred.email && body.password === cred.passsword)
    res.status(200).json({ msg: 'success' })
  else
    res.status(400).json({ msg: 'The provided password is wrong' })
}
