// Action Creator
// We export directly from the definition line (could also do at the bottom)
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}