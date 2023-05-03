import{type zodIssue} from "zod"

export interface CreateApiData{
    error:string | zodIssue[] | null
    createdApiKey: ApiKey | null
}

export interface RevokeApiData{
    error:string | ZodIssue[] | null
    success:boolean
}