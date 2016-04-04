class ZoosController < ApplicationController
  before_action do
    if params[:id]
      @zoo = Zoo.find(params[:id])
    end
  end

  def show
    render json: @zoo, status: :ok
  end

end
