export default function FavoriteAction(id) {
    return {
        type: "FAVORITE",
        payload: id
    }
}

export function DeletesAction(id) {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}
