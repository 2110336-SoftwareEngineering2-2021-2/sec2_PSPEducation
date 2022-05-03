*** Settings ***
Library    SeleniumLibrary
# Suite Setup    Open Browser  ${URL_GOOGLE}  ${BROWSER}
Test Teardown    Close Browser

*** Variables ***
${WEB_BROWSER}    chrome
${URL}    http://localhost:5000/register

*** Test Cases ***

submit student registration form (TC3-1)
    Open Browser    ${URL}    ${WEB_BROWSER}
    sleep    3

    ${firstname}=    Get Value    //*[@id='form-register-firstname']
    Should Be Equal    ${firstname}    \

    ${lastname}=    Get Value    //*[@id='form-register-lastname']
    Should Be Equal    ${lastname}    \

    ${username}=    Get Value    //*[@id='form-register-username']
    Should Be Equal    ${username}    \

    ${password}=    Get Value    //*[@id='form-register-password']
    Should Be Equal    ${password}    \

    ${confirm-password}=    Get Value    //*[@id='form-register-confirm-password']
    Should Be Equal    ${confirm-password}    \

    ${email}=    Get Value    //*[@id='form-register-email']
    Should Be Equal    ${email}    \

    ${phone-number}=    Get Value    //*[@id='form-register-phone-number']
    Should Be Equal    ${phone-number}    \

    ${display-name}=    Get Value    //*[@id='form-register-display-name']
    Should Be Equal    ${display-name}    \

    ${value}=     Get Element Attribute   //*[@id='mui-3']      value
    ${backspaces count}=    Get Length      ${value}
    Run Keyword If    """${value}""" != ''
    ...     Repeat Keyword  ${backspaces count +1}  Press Key  //*[@id='mui-3']   \\08
    ${bdate}=    Get Value    //*[@id='mui-3']
    Should Be Equal    ${bdate}    \
   
    ${display-name}=    Get Value    //*[@id='form-register-citizen-id']
    Should Be Equal    ${display-name}    \

    Click Button    //button[contains(text(),'Register')]
    sleep    3


submit blank registration form (TC3-2)

    Open Browser    ${URL}    ${WEB_BROWSER}
    sleep    3

    Click Element    	//*[@id='form-register-user-type']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Student']

    Input Text    //*[@id='form-register-firstname']    Dragorn
    ${firstname}=    Get Value    //*[@id='form-register-firstname']
    Should Be Equal    ${firstname}    Dragorn

    Input Text    //*[@id='form-register-lastname']    Padung
    ${lastname}=    Get Value    //*[@id='form-register-lastname']
    Should Be Equal    ${lastname}    Padung

    Input Text    //*[@id='form-register-username']    DragornLnwZa
    ${username}=    Get Value    //*[@id='form-register-username']
    Should Be Equal    ${username}    DragornLnwZa

    Input Text    //*[@id='form-register-password']    23rdcd3rsfsdf

    Input Text    //*[@id='form-register-confirm-password']    23rdcd3rsfsdf

    Input Text    //*[@id='form-register-email']    dragornpd@gmail.com
    ${email}=    Get Value    //*[@id='form-register-email']
    Should Be Equal    ${email}    dragornpd@gmail.com

    Input Text    //*[@id='form-register-phone-number']    0899999999
    ${phone-number}=    Get Value    //*[@id='form-register-phone-number']
    Should Be Equal    ${phone-number}    0899999999

    Input Text    //*[@id='form-register-display-name']    dron…socool
    ${display-name}=    Get Value    //*[@id='form-register-display-name']
    Should Be Equal    ${display-name}    dron…socool

    ${value}=     Get Element Attribute   //*[@id='mui-3']      value
    ${backspaces count}=    Get Length      ${value}
    Run Keyword If    """${value}""" != ''
    ...     Repeat Keyword  ${backspaces count +1}  Press Key  //*[@id='mui-3']   \\08
    Input Text    //*[@id='mui-3']    01/01/2001
    ${bdate}=    Get Value    //*[@id='mui-3']
    Should Be Equal    ${bdate}    01/01/2001

    Click Element    	//*[@id='form-register-gender']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Male']
    
    Click Element    	//*[@id='form-register-education']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Secondary4-6']
    
    Input Text    //*[@id='form-register-citizen-id']    8760994676734
    ${citizen-id}=    Get Value    //*[@id='form-register-citizen-id']
    Should Be Equal    ${citizen-id}    8760994676734

    Click Button    //button[contains(text(),'Register')]
    sleep    3
    

submit blank registration form (TC3-2)

    Open Browser    ${URL}    ${WEB_BROWSER}
    sleep    3

    Click Element    	//*[@id='form-register-user-type']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Student']

    Input Text    //*[@id='form-register-firstname']    Dragornaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ${firstname}=    Get Value    //*[@id='form-register-firstname']
    Should Be Equal    ${firstname}    Dragornaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    Input Text    //*[@id='form-register-lastname']    Padungaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ${lastname}=    Get Value    //*[@id='form-register-lastname']
    Should Be Equal    ${lastname}    Padungaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    Input Text    //*[@id='form-register-username']    DragornLnwZaaaaaaaaaaaaaaaaa
    ${username}=    Get Value    //*[@id='form-register-username']
    Should Be Equal    ${username}    DragornLnwZaaaaaaaaaaaaaaaaa

    Input Text    //*[@id='form-register-password']    23rdcd3rsfsdf

    Input Text    //*[@id='form-register-confirm-password']    23rdcd3rsfsdf

    Input Text    //*[@id='form-register-email']    dragornpd/gmail/com
    ${email}=    Get Value    //*[@id='form-register-email']
    Should Be Equal    ${email}    dragornpd/gmail/com

    Input Text    //*[@id='form-register-phone-number']    08999999991
    ${phone-number}=    Get Value    //*[@id='form-register-phone-number']
    Should Be Equal    ${phone-number}    08999999991

    Input Text    //*[@id='form-register-display-name']    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ${display-name}=    Get Value    //*[@id='form-register-display-name']
    Should Be Equal    ${display-name}    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    ${value}=     Get Element Attribute   //*[@id='mui-3']      value
    ${backspaces count}=    Get Length      ${value}
    Run Keyword If    """${value}""" != ''
    ...     Repeat Keyword  ${backspaces count +1}  Press Key  //*[@id='mui-3']   \\08
    Input Text    //*[@id='mui-3']    01/01/2001
    ${bdate}=    Get Value    //*[@id='mui-3']
    Should Be Equal    ${bdate}    01/01/2001

    Click Element    	//*[@id='form-register-gender']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Male']
    
    Click Element    	//*[@id='form-register-education']
    Click Element    	//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list']/li[.='Pre-School']
    
    Input Text    //*[@id='form-register-citizen-id']    6016473035828
    ${citizen-id}=    Get Value    //*[@id='form-register-citizen-id']
    Should Be Equal    ${citizen-id}    6016473035828

    Click Button    //button[contains(text(),'Register')]
    sleep    3