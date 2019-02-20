import axios from "axios"
export function Axios(method, url, data = {}) {
	return new Promise((resolve, reject) => {
		axios[method](url, method == 'post' ? Qs.stringify(data) : {
				params: data
			})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				console.log("错误信息" + err)
				reject(err)
			})
	})
}
