Feature: FM

Scenario: Login
Given go to web
When Login 'superadmin@swiftdynamics.co.th' and '12345678'
Then Enter for Login
When Wait to Loading page
And Check Wording 'Facilities Summary Data'