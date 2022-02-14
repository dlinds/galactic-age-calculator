# Galactic Age Calculator

### Calculates age and life expectancy on Mercury, Venus, Mars, and Jupiter.

#### By Daniel Lindsey  
<br>

# Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Markdown_
* _jQuery_
* _Bootstrap_
* _Popper.js_
* _Webpack_
* _ESLint_
* _Jest_
* _Babel_

# Description
This application will calculate the age of a person on Mercury, Venus, Mars, and Jupiter. Once the age has been calculated, life expectancy on Earth will be calculated and then translated to life expectancy on the previously mentioned planets.  
<br>
_Life expectancy is calculated based on the adding following factors:_  
 
1. **What type of climate they live in**
    <table>
        <tr>
            <td>Desert</td>
            <td>Tropical</td>
            <td>Plains</td>
        </tr>
        <tr>
            <td>45 Years</td>
            <td>50 Years</td>
            <td>55 Years</td>
        </tr>
    </table>  

2. **How many calories they consume per day** _(+20 years at 2000 calories, -1 year for every extra 100 calories and +1 year for each 100 calorie per day drop.)_
    <table>
        <tr>
            <td>1600 Cal</td>
            <td>1800 Cal</td>
            <td>1900 Cal</td>
            <td>2000 Cal</td>
            <td>2100 Cal</td>
            <td>2200 Cal</td>
            <td>2400 Cal</td>
        </tr>
        <tr>
            <td>24 Years</td>
            <td>22 Years</td>
            <td>21 Years</td>
            <td>20 Years</td>
            <td>19 Years</td>
            <td>18 Years</td>
            <td>16 Years</td>
        </tr>
    </table>
3. **Preference for coffee or tea**   
    <table>
        <tr>
            <td>Coffee</td>
            <td>Tea</td>
        </tr>
        <tr>
            <td>15 Years</td>
            <td>20 Years</td>
        </tr>
    </table>

For example, a person who lives in the desert, consumes 2200 calories a day, and prefers coffee, would have a life expectancy of 78 years on Earth.   
<br>
  
# Setup/Installation Requirements

* ## Cloning the repository
    
    1. First, you will need to access a terminal. The easiest way to do so on either OS X (Mac) or Windows is to install Visual Studio (VS) Code.
        *  [Windows](https://code.visualstudio.com/docs/?dv=win64user)
        *  [OS X](https://code.visualstudio.com/docs/?dv=osx)
    2. Next, install Node.js
        * [Node.js](https://nodejs.org/en/download/)
    3. Once VS Code and Node.js are installed, navigate back to [this project](https://github.com/dlinds/galactic-age-calculator)
    4. Locate and click the green Code button at the top of the page, and choose the option to _Download ZIP_.
    5. Once downloaded, navigate to your Downloads folder and extract the contents to a location of your choosing. 
    6. Right click in the root directory of the folder, and choose _Open With Code_. This should open the repository in VS Code.
    7. From the top menu in VS Code, choose **_Terminal_** --> **_New Terminal_**. A terminal should open at the bottom of the application
    8. Type the following commands into the terminal, entering in each one a time
       * npm install
       * npm build
    9. In the file explorer on the left of VS Code, navigate to the **_dist_** directory.
    10. Right click index.html, and choose Reveal in File Explorer. This should take you to the folder on your computer where the repo is downloaded to.
    11. Double click index.html to open in your browser.  
<br>  

    
* ## Changing or Adding to the Code
Should you wish to make any changes or additions to the code, be sure to run the tests in the **person.tests.js** file, located in the __ _tests_ __ directory. These tests are a series of inputs and outputs that determine whether or not the code is running as expected.
    
* Note that you will not be able to follow these directions without first having completed all steps in the **Cloning the repository** section above.  
<br>

Once you've made your additions or changes to the code, you'll want to confirm all previous tests are still passing. To run the tests, 

   1. From within VS Code, open a terminal at the root directory of the project
   2. Type the command  
        **npm test**
   3. A series of tests (those written out in the **person.tests.js** file) will then run.
   4. Use these test results to determine whether or not the feature/change you are adding will break the current code base or not.  
       * Currently, line coverage across all statements, branches, functions and lines are at 100%, with no uncovered lines. Before submitting any pull/push requests, please confirm that any changes you make do not affect the current set of tests. 
<br>  
  
If you have any questions about the tests or this process, please send me a message me on Github.
<br>

# Known Bugs

There are no known bugs at this time.

<br>

# License

MIT

<br>

# Contact Information

Daniel Lindsey  
https://github.com/dlinds  