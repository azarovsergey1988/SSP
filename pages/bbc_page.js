const I = actor();

module.exports = {

    elements: {
        bbcPage: 'https://www.bbc.com/',                                          // BBC URL

    },

    async checkBBCPage() {                                                      // Сheck on the page www.bbc.com
        await I.waitInUrl(this.elements.bbcPage);
        await I.seeInCurrentUrl(this.elements.bbcPage);
    },





};
