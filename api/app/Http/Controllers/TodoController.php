<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $todos = Todo::orderBy('id','desc')->get();
        return response()->json(['todos'=>$todos], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3|max:30'
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()], 422);
        }

        $todo = new Todo();
        $todo->title = $request->title;
        $todo->save();

        return response()->json(['message'=>'Todo created!'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $todo = Todo::find($request->id);
        if(!$todo){
            return response()->json(['message'=>'Todo not found!'], 404);
        }
        return response()->json(['todo'=>$todo], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $todo = Todo::find($request->id);
        if(!$todo){
            return response()->json(['message'=>'Todo not found!'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'min:3|max:100',
            'is_completed' => 'in:0,1'
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()], 422);
        }

        if($request->has('title')){
            $todo->title = $request->title;
        }

        if($request->has('is_completed')){
            $todo->is_completed = $request->is_completed;
        }

        $todo->save();

        if(!$todo->wasChanged()){
            return response()->json(['message'=>'No Change!'], 200);
        }

        return response()->json(['message'=>'Todo updated!'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $todo = Todo::find($request->id);
        if(!$todo){
            return response()->json(['message'=>'Todo not found!'], 404);
        }
        $todo->delete();
        return response()->json(['message'=>'Todo deleted!'], 200);
    }
}
