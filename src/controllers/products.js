const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * @desc Capturar todos os produtos disponiveis
 * @route GET /api/v1/products
 * @access Public 
 */
exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao capturar produtos', error });
    }
}

/**
 * @desc Capturar o produto solicitado
 * @route GET /api/v1/products/${product}
 * @access Public 
 */
exports.getProduct = async (req, res) => {
    const { id } = req.params; 

    try {
        const product = await prisma.product.findMany({
            where: { id: id }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao capturar produtos', error })
    }
}

/**
 * @desc Criar um novo produto
 * @route POST /api/v1/products
 * @access Public 
 */
exports.createProduct = async (req, res) => {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || !price || !quantity) {
        return res.status(400).json({ message: 'Forneça todos os campos necessários: nome, categoria, preço, quantidade.' });
    }

    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                category,
                price,
                quantity,
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o produto', error });
    }
};

/**
 * @desc Atualizar valores de um produto
 * @route PUT /api/v1/products
 * @access Public 
 */
exports.updateProduct = async (req, res) => {
    const { id, price, quantity } = req.body;
    console.log(id, price, quantity);

    if (price === undefined || quantity === undefined) {
        return res.status(400).json({ message: 'Forneça o preço e a quantidade para atualizar.' });
    }

    try {
        const updatedProduct = await prisma.product.update({
            where: { id: id },
            data: {
                price,
                quantity,
            },
        });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o produto', error });
    }
};

/**
 * @desc Deletar um produto não relacionado
 * @route DELETE /api/v1/products
 * @access Public 
 */
exports.deleteProduct = async (req, res) => {
    const { id } = req.body;

    if(!id) {
        return res.status(400).json({ message: 'Forneça o ID para remover o produto' })
    }

    try {
        const deleteProduct = await prisma.product.delete({
            where: { id: id }
        });
        res.status(200).json({ message: 'Produto removido da Loja.' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atulizar o produto', error })
    }
}