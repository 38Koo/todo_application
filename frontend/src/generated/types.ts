import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  createTask: TaskModel;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};

export type Query = {
  status?: Maybe<Array<StatusModel>>;
  task?: Maybe<Array<TaskModel>>;
};

export type StatusModel = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type TaskModel = {
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  memo?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  userId?: Maybe<Scalars['Float']>;
};

export type CreateTaskInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  memo?: InputMaybe<Scalars['String']>;
  statusId?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['Float']>;
};

export type GetStatusListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusListQuery = { status?: Array<{ id: number, name: string }> | null };

export type GetAllTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTasksQuery = { task?: Array<{ id: number, title: string }> | null };

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;


export type CreateTaskMutation = { createTask: { title: string, memo?: string | null, date?: any | null, statusId?: number | null, userId?: number | null } };


export const GetStatusListDocument = gql`
    query getStatusList {
  status {
    id
    name
  }
}
    `;

/**
 * __useGetStatusListQuery__
 *
 * To run a query within a React component, call `useGetStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatusListQuery(baseOptions?: Apollo.QueryHookOptions<GetStatusListQuery, GetStatusListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusListQuery, GetStatusListQueryVariables>(GetStatusListDocument, options);
      }
export function useGetStatusListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusListQuery, GetStatusListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusListQuery, GetStatusListQueryVariables>(GetStatusListDocument, options);
        }
export type GetStatusListQueryHookResult = ReturnType<typeof useGetStatusListQuery>;
export type GetStatusListLazyQueryHookResult = ReturnType<typeof useGetStatusListLazyQuery>;
export type GetStatusListQueryResult = Apollo.QueryResult<GetStatusListQuery, GetStatusListQueryVariables>;
export const GetAllTasksDocument = gql`
    query getAllTasks {
  task {
    id
    title
  }
}
    `;

/**
 * __useGetAllTasksQuery__
 *
 * To run a query within a React component, call `useGetAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTasksQuery, GetAllTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(GetAllTasksDocument, options);
      }
export function useGetAllTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTasksQuery, GetAllTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(GetAllTasksDocument, options);
        }
export type GetAllTasksQueryHookResult = ReturnType<typeof useGetAllTasksQuery>;
export type GetAllTasksLazyQueryHookResult = ReturnType<typeof useGetAllTasksLazyQuery>;
export type GetAllTasksQueryResult = Apollo.QueryResult<GetAllTasksQuery, GetAllTasksQueryVariables>;
export const CreateTaskDocument = gql`
    mutation createTask($input: createTaskInput!) {
  createTask(createTaskInput: $input) {
    title
    memo
    date
    statusId
    userId
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;