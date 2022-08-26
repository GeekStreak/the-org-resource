<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResourcesResource;
use App\Models\Resources;
use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    public function index()
    {
        return ResourcesResource::collection(Resources::all());
    }

    public function show(Resources $resource)
    {
        return new ResourcesResource($resource);
    }
}
