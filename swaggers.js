/**
 * @swagger
 * /api-doc/hello:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: John Doe
 *               - id: 2
 *                 name: Jane Smith
 */
/**
 * @swagger
 * /api-doc/fullname:
 *   get:
 *     summary: Retrieve full name from first name and last name.
 *     description: Retrieve the full name by combining the provided first name and last name.
 *     parameters:
 *       - in: query
 *         name: firstname
 *         schema:
 *           type: string
 *         required: true
 *         description: First name of the user.
 *       - in: query
 *         name: lastname
 *         schema:
 *           type: string
 *         required: true
 *         description: Last name of the user.
 *     responses:
 *       200:
 *         description: Full name response.
 *         content:
 *           application/json:
 *             example:
 *               fullname: John Doe
 */
/**
 * @swagger
 * /api-doc/fullname:
 *   post:
 *     summary: Retrieve full name from first name and last name.
 *     description: Retrieve the full name by combining the provided first name and last name.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *     responses:
 *       200:
 *         description: Full name response.
 *         content:
 *           application/json:
 *             example:
 *               fullname: John Doe
 */
