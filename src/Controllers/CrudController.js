const connection = require("../database/connection")

module.exports = {
  async GetAll(request, response) {
    let Alunos = connection

    Alunos = await connection("Alunos").select("*")
    return response.json(Alunos)
  },

  async GetID(request, response) {
    const { id } = request.params
    let Aluno = connection

    Aluno = await connection("Alunos").select("*").where("id", id)

    return response.json(Aluno)
  },

  async Post(request, response) {
    const { Nome, Idade, NumChamada } = request.body

    const [id] = await connection("Alunos").insert({
      Nome,
      Idade,
      NumChamada,
    })

    return response.json({ id })
  },

  async Update(request, response) {
    try {
      const { id } = request.params
      const { Nome, Idade, NumChamada } = request.body

      await connection("Alunos")
        .Update({
          Nome: Nome,
          Idade: Idade,
          NumChamada: NumChamada,
        })
        .where("id", id)

      return response.status(200).send("Registro Alterado com sucesso!")
    } catch (error) {
      return response.status(500).send(error)
    }
  },

  async Delete(request, response) {
    try {
      const { id } = request.params

      await connection("Alunos").where("id", id).delete()

      return response.status(200).send("Registro deletado com sucesso!")
    } catch (error) {
      return response.status(500).send(error)
    }
  },
}
