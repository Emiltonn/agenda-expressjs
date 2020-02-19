const getContacts = (request, response) => {
  // pool.query('SELECT * FROM contacts ORDER BY id ASC', (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
}

const getContactById = (request, response) => {
  const id = parseInt(request.params.id)

  // pool.query('SELECT * FROM contacts WHERE id = $1', [id], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
}

const createContact = (request, response) => {
  const { name, phone_number, email } = request.body

  // pool.query('INSERT INTO contacts (name, phone_number, email) VALUES ($1, $2)', [name, phone_number, email], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(201).send(`Contact added with ID: ${result.insertId}`)
  // })
}

const updateContact = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, phone_number, email } = request.body

  // pool.query(
  //   'UPDATE contacts SET name = $1, phone_number = $2 email = $3 WHERE id = $4',
  //   [name, phone_number, email, id],
  //   (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).send(`Contact modified with ID: ${id}`)
  //   }
  // )
}

const deleteContact = (request, response) => {
  const id = parseInt(request.params.id)

  // pool.query('DELETE FROM contacts WHERE id = $1', [id], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).send(`Contact deleted with ID: ${id}`)
  // })
}

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
}