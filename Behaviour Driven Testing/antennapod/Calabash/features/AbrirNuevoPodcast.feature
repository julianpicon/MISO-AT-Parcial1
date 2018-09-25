Feature: Opening the "Añadir Podcast" screen

  Scenario: As a user I want to be able to open the "Añadir Podcast" screen from the side menu the first time I open the app
    Given I press "Añadir podcast"      
    Then I should see "Buscar podcast en directorio"