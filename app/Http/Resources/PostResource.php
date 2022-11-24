<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'category_id' => $this->category_id,
            'category' => $this->category->name,
            'content' => $this->content,
            'contentShort' => substr($this->content, 0, 150) . '...',
            'link' => $this->link,
            'created_at' => $this->created_at->toDateString()
        ];
        return parent::toArray($request);
    }
}
