class ZoosController < ApplicationController
  before_action do
    if params[:id]
      @zoo = Zoo.find(params[:id])
    end
  end

  def 

  def index
    @zoos = Zoo.all
    respond_to do |format|
      format.html
      format.json{ render json: @zoos, status: :ok }
    end
  end

  def show
    render json: @zoo, status: :ok
  end

end
