var data = require("../database")
const { v4: uuidv4 } = require('uuid');


const vendorController = {
    addVendor: async (req, res) => {
        try {
            const vendor = req.body;
            const vendorId = uuidv4()
            data.push({ id: vendorId, ...vendor });
            res.status(200).json({ id: vendorId, ...vendor });
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    getVendor: async (req, res) => {
        try {
            res.send(data).status(200);
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    getVendorById: async (req, res) => {
        try {
            const { id } = req.params;
            const foundVendor = data.find((vendor) => vendor.id === id);
            res.send(foundVendor)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    updateVendor: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, phone, website, linkImage } = req.body;
            const vendor = data.find((vendor) => vendor.id === id);

            if (name) {
                vendor.name = name;
            }
            if (email) {
                vendor.email = email;
            }
            if (phone) {
                vendor.phone = phone;
            }
            if (website) {
                vendor.website = website;
            }
            if (linkImage) {
                vendor.linkImage = linkImage;
            }
            res.status(200).send('OK')

        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    deleteVendor: async (req, res) => {
        try {
            const { id } = req.params;
            data = data.filter((vendor) => vendor.id !== id);
            res.status(200).send('OK')
        }
        catch (err) {
            res.status(500).json(err)
        }
    }

};

module.exports = vendorController