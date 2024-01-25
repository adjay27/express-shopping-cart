import { Router } from "express";
const router = Router()

router.get('/products', async(req,res) => {
    try {
        const products = await productsQuery.get()
        res.json(products)
    } catch (err) {
        res.json ({error: err})
    }
})

export default router