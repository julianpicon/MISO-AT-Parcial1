Feature: Create new user into losestudiantes
    As an user I want to create an account  into losestudiantes website in order to rate teachers


Scenario Outline: Create account sucessfuly

  Given I go to losestudiantes home screen
    When I open the login screen
    And Fill with <firstname>, <lastname>, <email>, <password> and <degree>
    And I try to create an account <agreeTerms>
    Then I will see validate <message>

    Examples:
      | firstname  | lastname  | email                    | password  | degree  | agreeTerms | 
      | Julian     | Picon     | ja.picon@uniandes.edu.co | 12345678  | 12      | true       | 

Scenario Outline: Create account failed with empty fields.

  Given I go to losestudiantes home screen
    When I open the login screen
    And Fill with <firstname>, <lastname>, <email>, <password> and <degree>
    And I try to create an account <agreeTerms>
    Then The css <controlError> has to be red

    Examples:
      | firstname  | lastname       | email                           | password  | degree | agreeTerms | controlError   |
      |            | Picon    | ja.picon@uniandes.edu.co | 12345678  | 12345678     | true       |  name          |
      | Julian   |                |ja.picon@uniandes.edu.co | 12345678  | 12     | true       |  lastname      |
      | Julian    | Picon    |ja.picon@uniandes.edu.co | 12345678  | wrong | true       |  degree        |

      
Scenario Outline: Create account with information of existing user

  Given I go to losestudiantes home screen
    When I open the login screen
    And Fill with <firstname>, <lastname>, <email>, <password> and <degree>
    And I try to create an account <agreeTerms>
    Then I will see the alert <message>

    Examples:
      | firstname  | lastname       | email                           | password  | degree  | agreeTerms | message              |
      | Julian      | Picon    |ja.picon@uniandes.edu.co | 12345678  | 12      | true       | Error: Ya existe un usuario registrado con el correo 'ja.picon@uniandes.edu.co' |
