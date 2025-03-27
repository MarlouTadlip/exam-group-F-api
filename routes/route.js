import { Router } from 'express'

export const router = Router()

router.get('/exam-group', (req,res) => 
  res.json({message: "Group F API"})
)
