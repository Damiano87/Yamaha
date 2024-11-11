import prisma from "../lib/prisma.js";

// @desc Get wish list =============================================================
// @route GET /wishlist
// @access Private
const getWishlist = async (req, res) => {
  const userId = req.userId;

  try {
    // Fetch wishlist
    const userWishList = await prisma.vehicleWishList.findMany({
      where: {
        userId,
      },
      include: {
        atv: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            colorNames: true,
          },
        },
        moto: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            colorNames: true,
          },
        },
      },
    });

    res.json(userWishList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add item to wishlist =============================================================
// @route POST /wishlist
// @access Private
const addItem = async (req, res) => {
  const { vehicleId, vehicleType } = req.body;
  const userId = req.userId;

  if (!vehicleId || !vehicleType) {
    return res.status(400).json({
      message: "Vehicle ID and type are required",
    });
  }

  if (!["Atv", "Moto"].includes(vehicleType)) {
    return res.status(400).json({
      message: "Invalid vehicle type. Must be either 'Atv' or 'Moto'",
    });
  }

  try {
    // Check if vehicle exists in wish list
    const vehicleExists = await prisma.vehicleWishList.findUnique({
      where: {
        userId_vehicleId_vehicleType: { vehicleId, userId, vehicleType },
      },
    });

    // if exists, return error
    if (vehicleExists) {
      return res.status(404).json({
        message: `${vehicleType} with ID ${vehicleId} already is in wishlist`,
      });
    }

    // add vehicle to wish list
    const vehicle = await prisma.vehicleWishList.create({
      data: {
        userId,
        vehicleId,
        vehicleType,
      },
    });

    res.status(201).json({
      message: "Success",
      message: `Vehicle with ID ${vehicleId} successfully added to wishlist`,
      data: vehicle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Delete item from wish list =============================================================
// @route DELETE /wishlist
// @access Private
const deleteItem = async (req, res) => {
  const { vehicleId, vehicleType } = req.body;
  const userId = req.userId;

  if (!vehicleId || !vehicleType) {
    return res
      .status(400)
      .json({ message: "Vehicle Id and vehicle type required" });
  }

  try {
    // Check if vehicle exists in wish list
    const vehicleExists = await prisma.vehicleWishList.findUnique({
      where: {
        userId_vehicleId_vehicleType: { vehicleId, userId, vehicleType },
      },
    });

    if (!vehicleExists) {
      return res
        .status(404)
        .json({ message: `Vehicle with ID ${vehicleId} not found` });
    }

    await prisma.vehicleWishList.delete({
      where: {
        userId_vehicleId_vehicleType: { vehicleId, userId, vehicleType },
      },
    });

    res.status(200).json({ message: `Vehicle with ID ${vehicleId} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default {
  getWishlist,
  addItem,
  deleteItem,
};
