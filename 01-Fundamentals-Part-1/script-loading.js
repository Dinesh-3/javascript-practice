/**
 * DEFAULT ASYNC DEFER
 *
 * DEFAULT: <script src="" />
 *  If script tag is found js engine will stop html parsing and it will fetch the script from network then executes the script after executing the script it will continue the html parsing
 * ASYNC:
 *  If script tag is found js engine will continue html parsing and it will fetch the script asynchronously once script fetched from network then it will start executing the script after execution completes it will continue the html parsing
 * DEFER:
 *  If script tag is found js engine will continue html parsing and it will fetch the script asynchronously once script fetched from network then it won't execute the script it will continue html parsing process. Once html parsing is completed then only it will execute the scripts
 */
