// export const myMutation = ({ state }) =>  {

// }

export const setEntries = ( state, entries ) =>  {

    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) =>  { // entry actualizada

    const idx = state.entries.map( e => e.id ).indexOf(entry.id)

    state.entries[idx] = entry

}

export const addEntry = (/*{ state }*/) =>  {

}