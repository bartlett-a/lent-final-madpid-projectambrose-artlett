scene.onOverlapTile(SpriteKind.Player, assets.tile`tile`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.magicWand.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    info.changeScoreBy(-1)
    music.wawawawaa.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 . 2 . . . . . . . . . 
    . . . . 2 . 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level6 `)
music.baDing.play()
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
info.setScore(0)
