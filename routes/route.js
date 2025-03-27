import { Router } from 'express'

export const router = Router()

router.get('/exam-group', (req,res) => 
  res.json({message: "Group F API"})
)

router.get('/exams', (req, res) =>
  res.json({message: "Lists"})
)


router.post('/', exam)
