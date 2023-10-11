import http from "../utils/http";

export function getCategoryAPI(){
    return http.get("/api/breeds/image/random")
}