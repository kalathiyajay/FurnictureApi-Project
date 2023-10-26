const FavoraiteService = require('../../services/user/favoraite.services.js');
const favoraiteService = new FavoraiteService();


exports.addToFavoraite = async (req, res) => {

    try {
        let newFav = await favoraiteService.FavoraiteFind({ product: req.body.product, isDelete: false });

        if (newFav) {
            return res.json({ message: "FavoraiteProduct Is Already Exist.." })
        }

        newFav = await favoraiteService.FavoraiteCreate({ ...req.body});

        res.json({ newFav, message: "Favoraite Is Added.." })
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

exports.allMyFav = async(req,res)=>{
    try {
        let AlLMyFav = await favoraiteService.FavoraiteAll({isDelete:false});
        res.json(AlLMyFav)
    } catch (error) {
        
    }
}

exports.deleteMyFav = async (req, res) => {
    try {
        let ID = req.params.id
        let deleteFav = await favoraiteService.FavoraiteRemove(ID);

        if (!deleteFav) {
            res.json({ message: "Cart Data Is Not Found" })
        }
        deleteFav = await cartServices.CartUpdate(ID, { isDelete: true });
        res.json({ message: "Favoraite Data Is Deleted...." });

    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}