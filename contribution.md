# Let's Setup!  Before we start contributing, First thing first let's do a quick Github setup!  **First two things you'll want to do:** 1. Install git. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git (if it's not already installed).  2. Create a free GitHub account or login to your GitHub account, If you already have one.  There are different ways to clone a repo through GitHub Desktop, git bash (git terminal), VS Code terminal and for the purpose of this project, you have to have either one of listed in other to successfully clone and contribute to this project.  1. Through Github Desktop, Download [GitHub Desktop app](https://desktop.github.com/).  2. Comfortable using Git on the command line and want to use the git terminal to clone, download [git bash](https://desktop.gitbash.com/).  3. Alternatively If you use [VS Code](https://code.visualstudio.com/ 'Visual Studio Code website') you can use the VS Code terminal to clone as well.  **Now that we done with setting up the essential needed for this contribution to be a success, let's get to the main thing, CONTRIBUTION!.<br><br>** ## Let the contribution begin!  #### Using GitHub Desktop.  <h4>Step 1: Fork this repository</h4> - The objective here is to make a copy of this project and place it in your account. So go to the top right click on the fork icon just as in the picture below.  ![Fork](image/fork.PNG "click on 'Fork'") <h4>Step 2: Clone the repository</h4> - Now that we've successfully fork the repository and made a copy into our account, we will go ahead and clone the repository which is basically making a local copy of the project. This copy is saved on your own machine.  **To clone:** * Open the GitHub desktop app.  * Click on _file_ and then _clone repository_ ![Clone](image/clone.png 'click clone repository') * You will see a list of all your repository and forks on GitHub.  * Select `<your-github-username>/simple-contribution`.
  * Click _Clone_ button

- Now you have a local copy of the project.

<h4>Step 3: Create a new branch</h4>

- Once the repo has been cloned and you have it open in GitHub desktop it is time to create a new branch.
- We create a new branch to keep your changes separate from the master branch sometimes known as main branch so that if things go wrong you can simply delete the branch and the main project is not affected.

* Click on _Current branch_
  * Then click on _New_
  * Give your branch a name
  * Click `Create branch`

   ![Name branch](image/branch-name.png 'Name your branch') 

  - Go ahead and name the branch whatever you want, to make it easier since you're to add your details, you can name it `your-name-information`.
  * Publish your new branch to GitHub

  - This branch you have created separate from the master branch and it's the branch you'll be working with. Whatever you do, **make sure NOT to work on the branch branch**

<h4>Step 4: Open the project with VS Code (or any editor of choice)</h4>

- Once you click on _open with visual studio code_, the project opens up on you VS Code open the index.html file to start editing.
- If your're using other editor, find the project folder on your computer. The `index.html` file is directly in the `simple-contribution` folder.

[Open VS Code](image/vscode-open.jpeg 'Open index.html in your text editor') 

<h4>Step 5: Copy and edit the template</h4>

- UPDATE: So instead of making a copy of the template and editing it with yor dat inside the index.html file.

* Go to app.js file,
  * You'll see an array of data, add a new object into the array( to mmake it easier, copy and paste object template and edit)
The object template which now is **yours** for you to customize and edit.
  * Replace 'Your Name' with your name, 'Your Profession' with what you do, add your favorite quote and the link to your socials.

- Once you're done, **save your changes** by pressing ctrl + s.
- Next is to **Test your changes**. THIS IS IMPORTANT! To do that, left click on the index.html navigate to 
_open in default browser_ and click on it.This project will open in your browser and you'll see what the changes you added look like on the site. 
- Now, you have finished editing your code! And if nothing is broken and everything is working fine, you can go ahead and commit your changes.

<h4>Step 6: Commit and Push your changes</h4>

**Commit Changes**
- To commit your changes, go back to the GitHub desktop app; you will see that your changes have been added automatically to the staging area which means that all the changes made are already saved.
- Go ahead and _commit_ by filling in the _Summary_ field (the _description_ is optional). Add a short commit message explaining what you have changed e.g add my information and click the _Commit to main_ button.

 ![Commit Changes](image/commit.PNG 'Commit your changes') 

**Push Changes**
- Now your changes are committed, the next thing to do is to _push_ your changes by clicking on the _Push_ button so as to get it in synch with your repository on GitHub. You are "pushing" the changes from your local repository to the remote repository on GitHub.

 ![Push Changes](image/publish-branch.jpeg 'Name your branch') 
 
<h4>Step 7: Submit a PR(Pull Request)</h4>

- This is the last stage of your contribution; submitting a _Pull Request_ (PR).
- The reason for submitting a pull request is so that all the changes you made which is still on your own account of GitHub is sent to the main project to be merged.

* You can submit a pull request, 
  * By either clicking on the _create pull request_ button that shows after clicking the push button in Github Desktop
  * Or you go to the main page of **your fork** on GitHub, towards the top of the repo you will see a highlighted pull request message with a green button that has _Compare and pull request_ written on it. Click on the button to create your pull request.

  - Now when the `Open a pull request` page opens, it should look like the one in the photo below. Original project on the left, followed by the master branch. Your fork on the right and the branch you created 

  ![Open a Pull Request](image/pull-request.png 'You are requesting to merge your branch from your fork into the master branch of the original project')  

  - On the pull request page, write a title and add optional information in the description. Click `Create pull request` button.

  **Your information can only be added once your pull request have been reviewed and merged only then would you be able to see you information on the live site!**

##### YAY, ALL DONE! GUESS WHO JUST CONTRIBUTED TO AN OPEN SOURCE PROJECT ON GITHUB...YOU!!!👏

#### Using git bash (git terminal).
This steps can also be used if you're using VS Code terminal.

Go to the current directory where you want the cloned directory to be added.
```bash
cd folder directory
```
- Click on the clone button and then click the copy to clipboard icon.
 ![Copy Link](image/copy-url.png 'Copy the repository url') 

Open the git bash terminal and run the following git command
```bash
git clone "repository url you just copied"
```

Change into the repository directory folder on your computer (the folder you just cloned):

```bash
cd simple-contribution
```

Now create a new branch using the `git checkout` command

```bash
git checkout -b your-new-branch-name
```
- To edit and changes, open project in VS Code 

```bash
Code .
```

- After you've edit the template and made changes, tested and made sure the site is okay and nothing is broken
Commit your changes

```bash
git add index.html
```

```bash
git commit -m "Add <your-name> card info"
```

```bash
git push origin -u "Add <your-branch-name>"
```

- Continue the process _using the github desktop_ steps after pushing as it's same.

**Thank you for contributing to this project**.🤗

### Now that you're done contributing, go back to the main account repository, click on the site link by the right side, check out other contributors socials and connect with them. Also click on the _star_ button beside the _fork_ button.
![Star](image/star.PNG 'Click the star button')

# Acknowledgements🙏

This project is heavily influenced by [Syknapse](https://github.com/Syknapse) Amazing [Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project) project with its fine tuned tutorial. The project is also an awesome project for first time contributors as well so go ahead and contribute!

- You can **follow me** and get in touch on [Twitter](https://twitter.com/AlexStephanie10 '@AlexStephanie10')

### HAPPY CONTRIBUTING!🎊
