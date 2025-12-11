FTBQuestsEvents.completed(event => {
    return
    for (let i in event.object.getTitle()) {
        tell(i)
    }

    tell(event.object.getRawTitle().rawCopy())// (${event.object.getChildren().length()} children)`)
})