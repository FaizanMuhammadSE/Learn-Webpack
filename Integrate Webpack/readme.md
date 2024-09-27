### Conventionally

- At start developers create lot of JS files, and then inside html file they have to add scripts in a sequence, to make sure function is available before calling it

- If sequence is gonna break, then project won't work

- To overcome this issue there were lot of tools which come in between

- Now at lot of evolution, now we have webpack, which bundles our all code into a single javascript bundle, which takes cares of all files dependency

- You can see in HTML file we added scripts in sequence, to make sure helloWorld function load first before calling it
