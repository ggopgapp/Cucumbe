Feature: FM

ฺ
Scenario: Login
Given go to web and login 'superadmin@swiftdynamics.co.th' and '12345678'
When Enter for Login
Then Wait to Loading page and Check Word 'Facilities Summary Data'