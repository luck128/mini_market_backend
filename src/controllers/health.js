/**
 * @desc Checagem da saude atual da API
 */
exports.getHealth = (req, res) => {
    return res.status(200).json({ 
        success: true, 
        message: 'A API está saudável!',
        ts: Date.now()
    })
}