import backoffice.backend.Game

class BootStrap {

    def init = { servletContext ->
        new Game(name: "Legends of Olympus").save()
        new Game(name: "Grand Blackjack").save()
        new Game(name: "Baccpo").save()
    }

    def destroy = {
    }
}
