package backoffice.backend

import grails.rest.RestfulController

class GameController extends RestfulController {

    static responseFormats = ['json']

    static allowedMethods = [update: "POST"]

    GameController() {
        super(Game)
    }
}
