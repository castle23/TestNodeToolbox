import { Request, Response } from 'express'

export const test = function(req: Request, res: Response){
  let data:string = req.body.data;
  return res.json({
    success: true,
    data: data
  })
}