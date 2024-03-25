import express from 'express';
import { Login } from '../Models/UserModel';
import bcrypt from 'bcrypt';

const router = express.Router();

// Route for Save a new Login user
router.post('/', async (request, response) => {
    try {
      if (!request.body.username || !request.body.password) {
        return response.status(400).send({
          message: 'Send all required fields: username, password',
        });
      }
      
      // Hash the password 
      const hashedPassword = await bcrypt.hash(request.body.password, saltRounds);
  
      const newUser = {
        username: request.body.username,
        password: hashedPassword, // store the hashed password
      };
  
      const user = await Login.create(newUser);
  
      return response.status(201).send(user); // return the created user
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const users = await Login.find({});

    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One User from database by username
router.get('/:username', async (request, response) => {
  try {
    const { username } = request.params;

    const user = await Login.findById(username);

    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Eventual route for updating username
// router.put('/:id', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       });
//     }

//     const { id } = request.params;

//     const result = await Book.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' });
//     }

//     return response.status(200).send({ message: 'Book updated successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route for Delete a user
// router.delete('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' });
//     }

//     return response.status(200).send({ message: 'Book deleted successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router;