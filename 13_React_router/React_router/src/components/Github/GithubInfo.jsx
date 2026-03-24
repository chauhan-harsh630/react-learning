export const GithubInfo = async () => {
 const response = await fetch('https://api.github.com/users/chauhan-harsh630')
 const data = await response.json()
 return data;
}