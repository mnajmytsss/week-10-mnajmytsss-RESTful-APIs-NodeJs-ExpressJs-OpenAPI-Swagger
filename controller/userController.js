const { ObjectId } = require('mongodb');

async function createUser(req, res) {
  const { email, password, role } = req.body;

  const user = await req.db.collection('users').insertOne({
    email,
    password,
    role,
  });

  res.status(200).json({
    message: 'success',
    data: user,
  });
}

async function getAllUsers(req, res) {
  const users = await req.db
    .collection('users')
    .find({ is_deleted: { $exists: false } })
    .toArray();

  res.status(200).json({
    message: 'success',
    data: users,
  });
}

async function deleteUser(req, res) {
  const { id } = req.params;
  console.log(req.params, 'is deleted');

  const user = await req.db.collection('users').findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        is_deleted: true,
      },
    }
  );

  res.status(200).json({
    message: 'Deleted',
  });
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
};
