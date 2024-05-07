describe('Change avatar', () => {
    it('avatar change', () => {
        cy.fixture('student').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод логина студента')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(3000);

            cy.log('Переход в раздел "Профиль"')
            cy.get(':nth-child(2) > .menu-item__item-name').click()

            cy.log('Выбор изображения')
            cy.get('.form-input--file').selectFile(data.avatar)

            cy.log('Клик на сохранить')
            cy.get('.base-card > .button').click()
        })
    })
})