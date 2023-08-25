const { ObjectId } = require('mongodb');


async function createTransfer(req, res) {
  const { amount, currency, sourceAccount, destinationAccount } = req.body;

  const transfer = await req.db.collection('transfers').insertOne({
    amount,
    currency,
    sourceAccount,
    destinationAccount,
    status: 'pending',
  });

  res.status(200).json({
    message: 'success',
    data: transfer,
  });
}

async function getAllTransfers(req, res) {
  const transfers = await req.db
    .collection('transfers')
    .find({ is_deleted: { $exists: false } })
    .toArray();

  res.status(200).json({
    message: 'success',
    data: transfers,
  });
}

async function updateTransfer(req, res) {
  const id = req.params.id;
  const { amount, currency, sourceAccount, destinationAccount } = req.body;

  const transfer = await req.db.collection('transfers').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        amount,
        currency,
        sourceAccount,
        destinationAccount,
      },
    }
  );

  res.status(200).json({
    message: 'updated',
    data: transfer,
  });
}

async function updateTransferStatus(req, res) {
  const id = req.params.id;
  const { status } = req.body;
  
  try {  
    const transfer = await req.db.collection('transfers').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
      },
    }
  );

  res.status(200).json({
    message: 'updated',
    data: transfer,
  });
    
  } catch (error) {
    res.status(500).json({
      message: 'failed',
      data: error,
    });
  }
}

async function deleteTransfer(req, res) {
  const { id } = req.params;
  const transfer = await req.db.collection('transfers').findOneAndUpdate(
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
  createTransfer,
  getAllTransfers,
  updateTransfer,
  updateTransferStatus,
  deleteTransfer,
};
