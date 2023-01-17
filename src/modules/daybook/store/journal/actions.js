import journalApi from "@/api/journalApi"

// export const myAction = async({ commit }) =>  {

// }

export const loadEntries = async({ commit }) =>  {

    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for (let id of Object.keys(data)) {
       entries.push({
        id,
        ...data[id]
       })
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async({ commit }, entry ) =>  { //Entry debe de ser un param

    const {date, picture, text} = entry
    const dataToSave = {date,picture,text}
    const path = `/entries/${entry.id}.json`

    await journalApi.put(path, dataToSave)

    // // Commit mutación --> Update entry
    commit('updateEntry', { ...entry })
}


export const createEntry = async(/*{ commit }*/) =>  {

}