# Web Development Project 7 - *Avengers Assemble!*

Submitted by: **Umair Haque**

This web app: **Manipulate your chosen avenger's strength!**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form allows users to add new cremates**
- [X] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [X] **The site displays a summary page of all the user's added crewmates**
- [X] **A previously created crewmate can be updated and deleted from the crewmate list**
- [X] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

[Kap](https://getkap.co/) for macOS


## Notes

A problem I encountered while creating this project is editing the post. I kept getting this error:

Access to fetch at ‘https://antdpjzebqgqaworijnx.supabase.co/rest/v1/crewmates?id=eq.5e9bdfb9-0f92-4141-b8f7-abb6e053deea’ from origin ‘https://shimmering-stardust-c75334.netlify.app’ has been blocked by CORS policy: Method PATCH is not allowed by Access-Control-Allow-Methods in preflight response.

I then realized that my chrome browser has CORS policy, and safari doesn't. So after a tramendous amount of troubleshooting,
I decided to switch browsers and everything else worked perfectly.

## License

    Copyright [2023] [Umair Haque]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.