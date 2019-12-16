export const findById = (teams, id) => {
    const el = teams.find( (team) => team.id === id)
    return el.name
}