const User = require('../Schema/userSchema')

exports.posttingData = async (req, res) => {
    try {
        const { name, email, image, status, role, team } = req.body
        const user = User.create({ name, email, image, status, role, team })
        res.status(200).json({ message: 'postting',user })
    } catch (error) {
        res.status(500).json({ message: 'error in postting',error })
    }
}

exports.gettingData = async (req, res) => {
    try {
        const user = await User.find()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: 'error in getting',error })
    }
}

exports.gettingDatabyId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(202).json(user)
    } catch (error) {
        res.status(500).json({ message: 'error in get id' ,error})
    }
}

exports.putttingDatabyId = async (req, res) => {
    try {
        const { name, email, image, status, role, team } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { name, email, image, status, role, team })
        res.status(203).json({ message: 'puttting',user })
    } catch (error) {
        res.status(500).json({ message: 'error in putting',error })
    }
}

exports.deletingData = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(202).json({ message: 'deleteing',user })
    } catch (error) {
        res.status(500).json({ message: 'error in deleting',error })
    }
}